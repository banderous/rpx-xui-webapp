FROM hmctspublic.azurecr.io/base/node:12-alpine as base

LABEL maintainer = "HMCTS Expert UI <https://github.com/hmcts>"

COPY --chown=hmcts:hmcts package.json yarn.lock ./

FROM base as build
RUN yarn install

COPY --chown=hmcts:hmcts . .
COPY strategy.js ./node_modules/passport-oauth2/lib/strategy.js
#RUN yarn lint
RUN yarn build

EXPOSE 3000
#CMD [ "yarn", "start" ]
CMD [ "/bin/bash"]

#FROM base as runtime
#COPY --from=build $WORKDIR ./
#USER hmcts

