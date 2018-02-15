defmodule Memory.Game do
  def new do
    %{
      cardletter: randomize_cards(),
      cardcomplete: initialize_card_complete()
    }
  end

  def client_view(game) do

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
  def check_match(cardletter, cardcomplete, card1, card2) do
    if Enum.at(cardletter, card1) == Enum.at(cardletter, card2) do
      List.replace_at(cardcomplete, card1, true)
      List.replace_at(cardcomplete, card2, true)
    end
  end

  def end_game(cardcomplete) do
    !(Enum.member?(cardcomplete, false))
  end


end
