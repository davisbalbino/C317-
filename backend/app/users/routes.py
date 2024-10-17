from flask import request
from flask_restful import Resource
from backend.app.users.model import User
from backend.app.extensions import db, api


class UserResource(Resource):
    def get(self, id=None):
        if id:
            user = User.query.get(id)
            if not user:
                return {"error": "User not found"}, 404
            return user.to_dict(), 200
        else:
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

    def put(self, id):
        user = User.query.get(id)
        if not user:
            return {"error": "User not found"}, 404

        data = request.json
        user.name = data.get('name', user.name)
        user.phone_number = data.get('phone_number', user.phone_number)
        user.email = data.get('email', user.email)
        user.role = data.get('role', user.role)
        user.is_adm = data.get('is_adm', user.is_adm)

        if 'password' in data:
            user.set_password(data['password'])

        db.session.commit()

        return user.to_dict(), 200

    def delete(self, id):
        user = User.query.get(id)
        if not user:
            return {"error": "User not found"}, 404

        db.session.delete(user)
        db.session.commit()

        return {"message": "User deleted"}, 200

api.add_resource(UserResource, '/users', '/users/<int:id>')
