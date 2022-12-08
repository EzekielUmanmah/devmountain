require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

let nextEmp = 5;

module.exports = {
  getAllClients: (req, res) => {
    sequelize
      .query(
        `
        select * from cc_users u join cc_clients c 
        on u.user_id = c.user_id;
        `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  getPendingAppointments: (req, res) => {
    sequelize
      .query(
        `
     select * from cc_appointments
     where approved = false
     order by date desc;
    `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  getUpcomingAppointments: (req, res) => {
    sequelize
      .query(
        `select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
        from cc_appointments a
        join cc_emp_appts ea on a.appt_id = ea.appt_id
        join cc_employees e on e.emp_id = ea.emp_id
        join cc_users u on e.user_id = u.user_id
        where a.approved = true and a.completed = false
        order by a.date desc;`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  getPastAppointments: (req, res) => {
    sequelize
      .query(
        `
        select a.appt_id, a.date, a.service_type, a.notes, u.first_name, u.last_name
        from cc_appointments a 
        join cc_clients c on a.client_id = c.client_id  
        join cc_users u on u.user_id = c.client_id
        where a.approved = true and a.completed = true
        order by a.date desc;
    `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  approveAppointment: (req, res) => {
    let { apptId } = req.body;
    console.log('apptId: ', apptId);
    // insert into cc_emp_appts (emp_id, appt_id)
    //         values (${nextEmp}, ${apptId}),
    //         (${nextEmp + 1}, ${apptId});
    sequelize
      .query(
        `
        update cc_appointments set cc_appointments.approved = true
        where cc_appointments.appt_id = ${apptId}
        `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
        nextEmp += 2;
      })
      .catch((err) => console.log(err));
  },
  completeAppointment: (req, res) => {
    const { appId } = req.body;
    sequelize
      .query(
        `
        update cc_appointments a set a.completed = true
        where a.appt_id = ${appId};
    `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
};