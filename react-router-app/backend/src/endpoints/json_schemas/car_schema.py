from marshmallow import Schema, fields


class CarSchema(Schema):
    car_id = fields.Number()
    make = fields.String()
    model = fields.String()
    year = fields.Number()
    color = fields.String()
    price = fields.Number()
