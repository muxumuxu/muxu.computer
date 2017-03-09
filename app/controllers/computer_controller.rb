class ComputerController < ApplicationController
  def ask
  end

  def answer
    @password = params[:password]
    @answer = computer_answer(@password)
  end

  def computer_answer(password)
    @good_password = "123jaimelesinternets"
    return "You got it!" if @password == @good_password
    if @password == @password.upcase
      "CALM DOWN! I CAN SHOUT AT YOU TOO!"
    else
      "Nope, sorry, wrong one, nope nope nope."
    end
  end

end
