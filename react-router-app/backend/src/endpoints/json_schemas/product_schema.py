from marshmallow import Schema, fields


class ProductSchema(Schema):
    product_id = fields.Number()
    product_name = fields.String()
    supplier_id = fields.Number()
    category_id = fields.Number()
    quantity_per_unit = fields.String()
    unit_price = fields.Number()
    units_in_stock = fields.Number()
    units_on_order = fields.Number()
    reorder_level = fields.Number()
    discontinued = fields.Number()
