from flask import request
from flask_restful import Resource
from backend.app.users.model import User
from backend.app.extensions import db, api


class UserResource(Resource):
    def get(self):
        users = User.query.all()
        return [user.to_dict() for user in users], 200

    def post(self):
        data = request.json
        name = data.get('name')
        phone_number = data.get('phone_number')
        email = data.get('email')
        password = data.get('password')
        role = data.get('role')
        is_adm = data.get('is_adm', False)

        if not name or not phone_number or not email or not password or not role:
            return {"error": "Missing data"}, 400

        if User.query.filter_by(email=email).first():
            return {"error": "Email already in use"}, 400

        new_user = User(
            name=name,
            phone_number=phone_number,
            email=email,
            role=role,
            is_adm=is_adm
        )
        new_user.set_password(password)

        db.session.add(new_user)
        db.session.commit()

        return new_user.to_dict(), 201

api.add_resource(UserResource, '/users')
