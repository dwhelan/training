require "minitest/autorun"
require "minitest/pride"
require_relative "roman_numerals"

class RomanNumeralsTest < Minitest::Test
  include RomanNumerals

  def test_calculate_below_four
    assert_equal 'I', calculate(1)
    assert_equal 'II', calculate(2)
    assert_equal 'III', calculate(3)
  end

  def test_calculate_four
    assert_equal 'IV', calculate(4)
  end

  def test_calculate_five
    assert_equal 'V', calculate(5)
  end

  def test_calculate_six_to_eight
    assert_equal 'VI', calculate(6)
    assert_equal 'VII', calculate(7)
    assert_equal 'VIII', calculate(8)
  end

  def test_calculate_nine
    assert_equal 'IX', calculate(9)
  end

  def test_calculate_ten
    assert_equal 'X', calculate(10)
  end

  def test_calculate_eleven_to_thirteen
    assert_equal 'XI', calculate(11)
    assert_equal 'XII', calculate(12)
    assert_equal 'XIII', calculate(13)
  end

  def test_calculate_fourteen
    assert_equal 'XIV', calculate(14)
  end

  def test_calculate_fifty
    assert_equal 'L', calculate(50)
  end



  def test_calculate_thousands
    assert_equal 'M', calculate(1000)
    assert_equal 'MM', calculate(2000)
    assert_equal 'MMM', calculate(3000)
  end

  def test_calculate_2600
    assert_equal 'something', calculate(2600)
  end

  

end
