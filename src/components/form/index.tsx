import React, { useState, useMemo } from 'react';
import { Form, Row, Col, Button, Grid } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FormSchemasProps, SchemaItem } from './typing';
import { componentMap } from './componentMap';
import './style.less';

const { useBreakpoint } = Grid;

const screensResponsive: { [key: string]: number } = {
  xs: 2,
  sm: 2,
  md: 2,
  lg: 3,
  xl: 3,
  xxl: 4,
};

const defaultCollapseRender = (open: boolean) => {
  if (!open) {
    return (
      <>
        展开
        <DownOutlined
          style={{
            marginLeft: '0.5em',
            transition: '0.3s all',
            transform: `rotate(${open ? 0 : 0.5}turn)`,
          }}
        />
      </>
    );
  }

  return (
    <>
      收起
      <DownOutlined
        style={{
          marginLeft: '0.5em',
          transition: '0.3s all',
          transform: `rotate(${open ? 0 : 0.5}turn)`,
        }}
      />
    </>
  );
};

const FormSchemas = (props: FormSchemasProps) => {
  const {
    schemas,
    form,
    rowProps = {},
    colProps = {},
    tableForm = false,
    ...restForm
  } = props;
  const screens = useBreakpoint();
  const getRowProps = useMemo(
    () => (tableForm ? { gutter: 24 } : rowProps),
    [tableForm, rowProps],
  );
  const firstResponsiveItemMax = useMemo(() => {
    let maxNumber = 2;
    const arrayScrenns = Object.entries(screens).filter(
      (screen) => !!screen[1],
    );
    const maxKeys = arrayScrenns[arrayScrenns.length - 1]?.[0];

    return (screensResponsive[maxKeys] || maxNumber) - 1;
  }, [tableForm, screens]);

  const [open, setOpen] = useState(false);

  console.log('11111', firstResponsiveItemMax);

  return (
    <Form className="form-schemas" form={form} {...restForm}>
      <Row {...getRowProps}>
        {schemas.map((schema: SchemaItem, index: number) => {
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
          const showItem = tableForm
            ? open
              ? true
              : index < firstResponsiveItemMax
            : true;
          if (dependencieNames && dependencieNames?.length > 0) {
            return (
              showItem && (
                <Form.Item
                  noStyle
                  key={schema.name as string}
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
                        <Col {...col}>
                          <Form.Item {...restFromItem}>
                            <Component
                              {...componentProps}
                              formValus={values}
                            ></Component>
                          </Form.Item>
                        </Col>
                      )
                    );
                  }}
                </Form.Item>
              )
            );
          }
          return (
            showItem && (
              <Col key={schema.name as string} {...col}>
                <Form.Item {...restFromItem}>
                  <Component {...componentProps}></Component>
                </Form.Item>
              </Col>
            )
          );
        })}
        {tableForm && (
          <Col className="table-form-action">
            <Button type="primary">搜索</Button>
            <Button>重置</Button>
            <Button type="link" onClick={() => setOpen(!open)}>
            {
              defaultCollapseRender(open)
            }
            </Button>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default FormSchemas;
