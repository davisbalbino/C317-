from backend.app import db

group_user_association = db.Table('group_user',
                                  db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
                                  db.Column('group_id', db.Integer, db.ForeignKey('group.id'), primary_key=True)
                                  )


class Group(db.Model):
    __tablename__ = 'group'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))

    users = db.relationship('User', secondary=group_user_association, backref=db.backref('groups', lazy='dynamic'))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "users": [user.to_dict() for user in self.users]
        }

    def __repr__(self):
        return f'<Group {self.name}>'
