FROM node:16

COPY . .

RUN npm install

RUN useradd -m appuser

RUN chown appuser .

USER appuser

CMD node index.js

# docker build . -t mluukkai/poc-web

# docker run -p 8080:8080 mluukkai/poc-web