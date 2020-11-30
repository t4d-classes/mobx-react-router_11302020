from marshmallow import Schema, fields


class ColorSchema(Schema):
    color_id = fields.Number()
    color_name = fields.String()
    hexcode = fields.String()
