class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :task
      t.integer :category_id
      t.date :due_date
      t.timestamps
    end
  end
end
