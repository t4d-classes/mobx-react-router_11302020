from marshmallow import Schema, fields


class SupplierSchema(Schema):
    supplier_id = fields.Number()
    company_name = fields.Str()
    contact_name = fields.Str()
    contact_title = fields.Str()
    address = fields.Str()
    city = fields.Str()
    region = fields.Str()
    postal_code = fields.Str()
    country = fields.Str()
    phone = fields.Str()
    fax = fields.Str()
    homepage = fields.Str()
