FROM node:11
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm ci
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3000
CMD [ "npm", "run", "start" ]