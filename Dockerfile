FROM node:20-alpine

ENV TMX_PATH=tmx-moon \
    TMX_NAME="TMX Moon"

LABEL name=$TMX_NAME

LABEL version="v2.1.0"

LABEL description="Probability gender and name to consist in a determined \
equity gender with the support and amount research"

WORKDIR /$TMX_PATH

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3005

CMD ["npm", "start"]