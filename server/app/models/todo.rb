class Todo < ActiveRecord::Base
  belongs_to :category

  def due
    return nil if self.due_date.nil?
    days_left = (self.due_date - Date.today).to_i
    
    # if days_left < 30.days
    #     weeks_left = days_left.in_weeks.floor
    #     "#{weeks_left} #{'week'.pluralize(weeks_left)}"
    #     elsif days_left < 365.days
    #         months_left = days_left.in_months.floor
    #         "#{months_left} #{'month'.pluralize(months_left)}"
    #     else
    #         years_left = days_left.in_years.floor
    #         "#{years_left} #{'year'.pluralize(years_left)}"
    #     end
    
    end
end




