from flask import request, jsonify
from flask_restful import Resource, Api
from backend.app.extensions import db, api
from backend.app.users.model import User
from backend.app.group.model import Group



class GroupListResource(Resource):
    def get(self):
        groups = Group.query.all()
        return jsonify([group.to_dict() for group in groups])

    def post(self):
        data = request.get_json()
        name = data.get('name')
        description = data.get('description')

        if not name:
            return {'message': 'Group name is required'}, 400

        new_group = Group(name=name, description=description)
        db.session.add(new_group)
        db.session.commit()
        return new_group.to_dict(), 201


class GroupResource(Resource):
    def get(self, group_id):
        group = Group.query.get_or_404(group_id)
        return group.to_dict()

    def put(self, group_id):
        group = Group.query.get_or_404(group_id)
        data = request.get_json()

        group.name = data.get('name', group.name)
        group.description = data.get('description', group.description)

        db.session.commit()
        return group.to_dict()

    def delete(self, group_id):
        group = Group.query.get_or_404(group_id)
        db.session.delete(group)
        db.session.commit()
        return {'message': 'Group deleted'}, 204


class GroupUserResource(Resource):
    def post(self, group_id, user_id):
        group = Group.query.get_or_404(group_id)
        user = User.query.get_or_404(user_id)

        if user in group.users:
            return {'message': 'User already in the group'}, 400

        group.users.append(user)
        db.session.commit()
        return group.to_dict(), 200

    def delete(self, group_id, user_id):
        group = Group.query.get_or_404(group_id)
        user = User.query.get_or_404(user_id)

        if user not in group.users:
            return {'message': 'User not in the group'}, 400

        group.users.remove(user)
        db.session.commit()
        return {'message': 'User removed from group'}, 200


api.add_resource(GroupListResource, '/groups')
api.add_resource(GroupResource, '/groups/<int:group_id>')
api.add_resource(GroupUserResource, '/groups/<int:group_id>/users/<int:user_id>')
