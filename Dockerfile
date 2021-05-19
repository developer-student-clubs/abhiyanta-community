FROM node
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install react-scripts@4.0.3 -g

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["npm","start"]