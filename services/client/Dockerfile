FROM node:14-alpine AS node

FROM node AS builder
WORKDIR /app            
COPY package*.json ./   
RUN npm i               
COPY . .                
RUN npm run build       

FROM node AS final
RUN mkdir -p /app/dist                  
WORKDIR /app                            
COPY package*.json ./                   
RUN npm i --only=production             
COPY --from=builder /app/dist ./dist
EXPOSE 3000
ENTRYPOINT ["node", "./dist/index.js"]