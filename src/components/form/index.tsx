import React, { useRef, useMemo } from 'react';
import { Form, Row, Col } from 'antd';
import { FormSchemasProps, SchemaItem } from './typing';
import { componentMap } from './componentMap';

// xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}
// labelCol: { span: 6 },
// wrapperCol: { span: 18 },
const FormSchemas = (props: FormSchemasProps) => {
  const {
    schemas,
    form,
    rowProps = {},
    colProps = {},
    tableForm = false,
    ...restForm
  } = props;
  const getRowProps = useMemo(
    () => (tableForm ? { gutter: 24 } : rowProps),
    [tableForm, rowProps],
  );

  return (
    <Form form={form} {...restForm}>
      <Row {...getRowProps}>
        {schemas.map((schema: SchemaItem) => {
          const {
            componentProps,
            component,
            colProps: colItemProps = {},
            ...restFromItem
          } = schema;
          const Component = componentMap.get(schema.component);
          const col = tableForm
            ? { xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }
            : { ...colProps, ...colItemProps };
          return (
            <Col key={schema.name as string} {...col}>
              <Form.Item {...restFromItem}>
                <Component {...componentProps}></Component>
              </Form.Item>
            </Col>
          );
        })}
      </Row>
    </Form>
  );
};

export default FormSchemas;
