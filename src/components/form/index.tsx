import React, { useRef, useMemo } from 'react';
import { Form, Row, Col, Button, FormInstance } from 'antd';
import { FormSchemasProps, SchemaItem } from './typing';
import { componentMap } from './componentMap';
import './style.less';

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
    <Form className="form-schemas" form={form} {...restForm}>
      <Row {...getRowProps}>
        {schemas.map((schema: SchemaItem) => {
          const {
            componentProps,
            component,
            colProps: colItemProps = {},
            dependencieNames,
            shouldUpdate,
            renderShowItem,
            ...restFromItem
          } = schema;
          const Component = componentMap.get(schema.component);
          const col = tableForm
            ? { xs: 12, sm: 12, md: 12, lg: 8, xl: 8, xxl: 6 }
            : { ...colProps, ...colItemProps };
          if (dependencieNames && dependencieNames?.length > 0) {
            return (
              <Col key={schema.name as string} {...col}>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, nextValues, info) => {
                    if (shouldUpdate === undefined) {
                      const isUpdata = dependencieNames.some(
                        (dependencieName) =>
                          prevValues[dependencieName] !=
                          nextValues[dependencieName],
                      );
                      return isUpdata;
                    }
                    if (shouldUpdate === false) return false;
                    if (shouldUpdate === true) return true;
                    return shouldUpdate(prevValues, nextValues, info);
                  }}
                >
                  {({}) => {
                    let showItemComponent = true;
                    const values: any = dependencieNames.reduce((pre, next) => {
                      const noFormatValue = form.getFieldValue(next);
                      showItemComponent =
                        showItemComponent &&
                        noFormatValue != null &&
                        noFormatValue != undefined &&
                        noFormatValue != '';
                      return { ...pre, [next]: noFormatValue };
                    }, {});
                    if (renderShowItem) {
                      showItemComponent = renderShowItem(values);
                    }
                    return (
                      showItemComponent && (
                        <Form.Item {...restFromItem}>
                          <Component {...componentProps}></Component>
                        </Form.Item>
                      )
                    );
                  }}
                </Form.Item>
              </Col>
            );
          }
          return (
            <Col key={schema.name as string} {...col}>
              <Form.Item {...restFromItem}>
                <Component {...componentProps}></Component>
              </Form.Item>
            </Col>
          );
        })}
        {tableForm && (
          <Col className="table-form-action">
            <Button type="primary">搜索</Button>
            <Button>重置</Button>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default FormSchemas;
