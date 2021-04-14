require "minitest/autorun"
require "minitest/pride"
require_relative "roman_numerals"

class RomanNumeralsTest < Minitest::Test
  include RomanNumerals

  def test_start_here
    assert_equal true, true
  end
end
