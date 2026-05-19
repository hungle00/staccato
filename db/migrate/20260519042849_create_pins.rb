class CreatePins < ActiveRecord::Migration[8.0]
  def change
    create_table :pins do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.text :description
      t.boolean :published, default: true
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
