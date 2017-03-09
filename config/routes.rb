Rails.application.routes.draw do
  get 'answer', to: 'computer#answer'

  get 'ask', to: 'computer#ask'

  root to: 'computer#ask'
end
