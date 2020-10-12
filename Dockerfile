FROM node:12 AS compile-image

# Create app directory
WORKDIR /code

ARG appEnv=testing

COPY . /code/

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production
RUN yarn build:${appEnv}

FROM nginx:1.15

# RUN rm -rf /usr/share/nginx/html/*

# Bundle app source
# COPY /dist /usr/share/nginx/html

COPY --from=compile-image /code/dist/ /usr/share/nginx/html