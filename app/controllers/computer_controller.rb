class ComputerController < ApplicationController
  def ask
  end

  def answer
    @query = params[:query]
    @answer = computer_answer(@query)
  end

  def computer_answer(query)
    @champion = "123jaimelesinternets"
    return "You got it!" if @query == @champion
    if @query == @query.upcase
      "CALM DOWN! I CAN SHOUT AT YOU TOO!"
    else
      "Nope, sorry, wrong one, nope nope nope."
    end
  end

end
