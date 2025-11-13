FROM node:22

WORKDIR /app

# Install Python, pip, build tools, and Chrome
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-dev \
    build-essential \
    wget \
    curl \
    chromium-browser \
    chromium-chromedriver \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip
RUN pip3 install --upgrade pip setuptools wheel

# Copy application files
COPY . .

# Install Node dependencies
RUN npm install

# Install Python dependencies
RUN pip3 install --no-cache-dir selenium

EXPOSE 3001

CMD ["node", "index.js"]