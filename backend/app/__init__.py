from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from backend.config import STATIC_FOLDER
from backend.config import TEMPLATE_FOLDER
from backend.config import Config

db = SQLAlchemy()
migrate = Migrate()


def create_app(config_class=Config):
    app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)

    return app
