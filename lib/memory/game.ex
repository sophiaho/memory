defmodule Memory.Game do
  def new do
    %{
      cardletter: randomize_cards(),
      cardcomplete: initialize_card_complete()
    }
  end

  def randomize_cards do
    Enum.shuffle(["A", "A", "B", "B", "C", "C", "D", "D", "E",
                      "E", "F", "F", "G", "G", "H", "H"])
  end

  def initialize_card_complete do
    [false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false]
  end

  #compares card1 (first click) to card2(second click)
  #cards correspond to their index
  def check_match(card1, card2) do
    if Enum.at(game.cardletter, card1) == Enum.at(game.cardletter, card2) do
      List.replace_at(game.cardcomplete, card1, true)
      List.replace_at(game.cardcomplete, card2, true)
  end

  def end_game do
    !(Enum.member?(game.cardcomplete, false))
  end

  
end
