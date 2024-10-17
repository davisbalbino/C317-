from flask import Flask
from backend.app.config import Config
from backend.app.extensions import db, migrate, api
from backend.app.users.routes import UserResource
from backend.app.group.routes import GroupUserResource, GroupResource, GroupListResource


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    api.init_app(app)

    with app.app_context():
        print("Registered routes:")
        print(app.url_map)

    return app
