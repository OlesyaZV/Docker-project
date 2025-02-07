FROM node:16
WORKDIR /app
COPY backend/package*.json ./
RUN npm install --force
COPY backend/ ./
EXPOSE 5000

CMD ["npm", "start"]