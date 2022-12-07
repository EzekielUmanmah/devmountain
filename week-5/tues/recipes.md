- users can sign into the app with their email and password

- users can create recipes with ingredients and instructions

- recipes can be marked as public or private

- users can view other people’s recipes

- ingredients from recipes can be added to user’s grocery lists

- users can create their own occasions and assign recipes to occasions

# Tables

- users => user info
  - id => primary
  - email
  - pw
- recipes => ingredients + instructions
  - id => primary
  - private => boolean
  - instructions => text
  - user's id
- ingredients => ingredients
  - id => primary
- groceries => groceries
  - id => primary
  -
- occasion

  - id
  - user id

- occasion_recipe
  - occasion id
  - recipe id

# Relationships

- users === recipes
- recipes === ingredients
- ingredients === groceries

recipes - recipe_id serial primary key - user_id int foreign key references users(user_id) - instructions text - public boolean default true

ingredients - ingredient_id serial primary key - ingredient_name

recipes_ingredients - recipe_id int foreign key references recipes(recipe_id) - ingredient_id int foreign key references ingredients(ingredient_id)
