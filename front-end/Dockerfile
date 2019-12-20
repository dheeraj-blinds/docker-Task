FROM node as build

WORKDIR /app
COPY package.json /app/
RUN npm install

COPY ./ /app/
RUN npm run-script build

FROM nginx AS runtime
COPY --from=build /app/build/ /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
