# settings.py

INSTALLED_APPS = [
    # Existing apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # New apps
    'rest_framework',
    'corsheaders',
    'grievances',
]

MIDDLEWARE = [
    # Existing middleware
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # New middleware
    'corsheaders.middleware.CorsMiddleware',
]

# CORS settings
CORS_ALLOW_ALL_ORIGINS = True
