
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # CRUD for todos
  get "/tasks" do
    Todo.all.to_json(methods: [:due])
  end

  get "/tasks/:id" do
    Todo.find(params[:id]).to_json(methods: [:due])
  end

  post "/tasks" do
    new_todo = Todo.create(
      task: params[:task],
      category_id: params[:category_id],
      due_date: params[:due_date]
    )
    new_todo.to_json(methods: [:due])
  end

  patch "/tasks/:id" do
    todo = Todo.find(params[:id])
    todo.update(
      task: params[:task],
      category_id: params[:category_id],
      due_date: params[:due_date]
    )
    todo.to_json(methods: [:due])
  end

  delete "/tasks/:id" do
    todo = Todo.find(params[:id])
    todo.destroy
    status 204
  end

  # CRUD for categories
  get "/categories" do
    Category.all.to_json
  end

  post "/categories" do
    new_category = Category.create(
      name: params[:name]
    )
    new_category.to_json
  end


end
