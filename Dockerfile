FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy project files
COPY . .

# Expose default port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
