FROM node:14

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]