puts "🌱 Seeding spices..."

# Seed your database here

#create categories
c1 = Category.create(name: 'school')
c2 = Category.create(name: "family")
c3 = Category.create(name: "chores")
c4 = Category.create(name: "work")

#create todos
todo1 = Todo.create(task: "P3 project", category_id: c1.id, due_date: Date.new(2022, 05, 31))
todo2 = Todo.create(task: "clean the house", category_id: c3.id, due_date: Date.new(2022, 06, 02))
todo3 = Todo.create(task: "1 on 1", category_id: c4.id, due_date: Date.new(2022, 06, 03))

puts "✅ Done seeding!"
