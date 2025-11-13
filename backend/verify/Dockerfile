FROM node:22

WORKDIR /app

# Install Python and pip
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Copy application files
COPY . .

# Install Node dependencies
RUN npm install

# Install Python dependencies
RUN pip3 install selenium

# Download ChromeDriver (latest stable version for headless use)
RUN wget -q https://googlechromelabs.github.io/chrome-for-testing/ && \
    apt-get install -y chromium-browser && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 3001

CMD ["node", "index.js"]