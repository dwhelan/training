module RomanNumerals
  def calculate(input)
    number_of_M = (input / 1000).to_i
    number_of_D = (input / 500).to_i - (number_of_M * 2)
    number_of_C = (input / 100).to_i - (number_of_D * 5)
    number_of_L = (input / 50).to_i - (number_of_C * 2)
    number_of_X = (input / 10).to_i - (number_of_L * 5)
    number_of_V = (input / 5).to_i - (number_of_X * 2)
    number_of_I = input % 5
    if input < 4
      'I' * number_of_I
    elsif input == 4
      'IV'
    elsif input >= 5 && input < 9
      'V' * number_of_V + 'I' * number_of_I
    elsif input == 9
      'IX'
    elsif input >= 10 && input <= 13
      'X' * number_of_X + 'I' * number_of_I
    elsif input == 14
      'XIV'
    elsif input == 50
      'L' * number_of_L + 'X' * number_of_X + 'I' * number_of_I
    elsif input >= 1000
      'M' * number_of_M
      
    end
  end
end
