FROM node:10.14

WORKDIR /app/

# Install dependencies
COPY package.json yarn.lock /app/

RUN yarn install

# Add rest of the client code
COPY . /app/

EXPOSE 3000

CMD yarn start