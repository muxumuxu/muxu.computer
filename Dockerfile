FROM ruby:2.3.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /muxu.computer
WORKDIR /muxu.computer
ADD Gemfile /muxu.computer/Gemfile
ADD Gemfile.lock /muxu.computer/Gemfile.lock
RUN gem install bundler
RUN bundle install
ADD . /muxu.computer
CMD bundle exec rails s -p ${PORT:-3000} -b '0.0.0.0'