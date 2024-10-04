FROM nginx:1.19.0-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy the custom nginx.conf file from the current directory to Nginx configuration directory
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy built React files from the frontend build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80