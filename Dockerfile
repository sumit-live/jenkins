from node
WORKDIR /portfolio
COPY . /portfolio
run npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]