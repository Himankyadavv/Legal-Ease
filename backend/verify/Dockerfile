# Dockerfile (venv-based, recommended)
FROM node:22-slim

WORKDIR /app

# Install system packages needed for Python and Chromium
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    python3 \
    python3-venv \
    python3-distutils \
    build-essential \
    wget \
    curl \
    unzip \
    fonts-liberation \
    libnss3 \
    libx11-6 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libatk1.0-0 \
    libcups2 \
    chromium \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Create a virtual environment and add it to PATH
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Upgrade pip inside the venv and install Python deps
RUN python -m pip install --upgrade pip setuptools wheel
RUN python -m pip install --no-cache-dir selenium==4.15.2 webdriver-manager

# Node deps
COPY package*.json ./
RUN npm install --production

# App files
COPY . .

EXPOSE 3001
CMD ["node", "index.js"]

