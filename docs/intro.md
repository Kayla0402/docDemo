---
sidebar_position: 3
---
# 支付宝开放平台交易接口
#### alipay.trade.precreate(统一收单线下交易预创建)
###### 更新时间：2021-01-08 14:13:59

* * *
## 支持第三方代理调用

### 通用场景
收银员通过收银台或商户后台调用支付宝接口，生成二维码后，展示给用户，由用户扫描二维码完成订单支付。
### 当面付
收银员通过收银台或商户后台调用支付宝接口，生成二维码后，展示给用户，由用户扫描二维码完成订单支付。


####  公共参数

##### 公共请求参数


| 参数   |类型  |  是否必填|最大长度  |描述  |示列值  |
| --- | --- | --- | --- | --- | --- |
| app_id |String  |是  |32  |支付宝分配给开发者的应用ID|2014072300007148  |
| method |String  |是  |128  |接口名称|alipay.trade.precreate |
| format |String  |是  |128  |接口名称|json |
| charset |String  |是  |128  |接口名称|utf-8 |
  sign_type |String  |是  |128  |接口名称|RSA2 |
  sign |String  |是  |128  |接口名称|相见时列 |
  version |String  |是  |128  |接口名称|版本 |
  sign |String  |是  |128  |接口名称|签名 |
  
  
  ##### 请求参数


| 参数   |类型  |  是否必填|最大长度  |描述  |示列值  |
| --- | --- | --- | --- | --- | --- |
| out_trade_no |String  |是  |32|  商户订单号。64 个字符以内的大小，可包含字母、数字、下划线。需保证该参数在商户端不重复|20150320010101001  |
| seller_id |String  |是  |128  |卖家支付宝用户 ID。 如果该值为空，则默认为商户签约账号对应的支付宝用户 ID。不允许收款账号与付款方账号相同|2088102146225135 |
| format |String  |是  |128  |接口名称|json |
| charset |String  |是  |128  |接口名称|utf-8 |
  sign_type |String  |是  |128  |接口名称|RSA2 |
  sign |String  |是  |128  |接口名称|相见时列 |
  version |String  |是  |128  |接口名称|版本 |
  sign |String  |是  |128  |接口名称|签名 |
  
 ##### 公共响应参数

| 参数   |类型  |  是否必填|最大长度  |描述  |示列值  |
| --- | --- | --- | --- | --- | --- |
| code |String  |是  |-|  网关返回码|  40004|
| msg |String  |是  |-|  描述|  40004|
| code |String  |是  |-|  业务返回码，参见具体的API接口文档|  40004|
| sub_code |String  |是  |-| 交易已被支付|  40004|
| sub_msg |String  |是  |-|  业务返回码描述，参见具体的API接口文档|  40004|

 ## 请求示例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="java"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Python', value: 'py', },
    { label: 'C++', value: 'c++', },
  ]
}>
<TabItem value="java">

```java
AlipayClient alipayClient = new DefaultAlipayClient("https://openapi.alipay.com/gateway.do","app_id","your private_key","json","GBK","alipay_public_key","RSA2");
AlipayTradePrecreateRequest request = new AlipayTradePrecreateRequest();
request.setBizContent("{" +
"\"out_trade_no\":\"20150320010101001\"," +
"\"seller_id\":\"2088102146225135\"," +
"\"total_amount\":88.88," +
"\"discountable_amount\":8.88," +
"\"undiscountable_amount\":80," +
"\"buyer_logon_id\":\"15901825620\"," +
"\"subject\":\"Iphone6 16G\"," +
"      \"goods_detail\":[{" +
"        \"goods_id\":\"apple-01\"," +
"\"alipay_goods_id\":\"20010001\"," +
"\"goods_name\":\"ipad\"," +
"\"quantity\":1," +
"\"price\":2000," +
"\"goods_category\":\"34543238\"," +
"\"categories_tree\":\"124868003|126232002|126252004\"," +
"\"body\":\"特价手机\"," +
"\"show_url\":\"http://www.alipay.com/xxx.jpg\"" +
"        }]," +
"\"body\":\"Iphone6 16G\"," +
"\"product_code\":\"FACE_TO_FACE_PAYMENT\"," +
"\"operator_id\":\"yx_001\"," +
"\"store_id\":\"NJ_001\"," +
"\"disable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," +
"\"enable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," +
"\"terminal_id\":\"NJ_T_001\"," +
"\"extend_params\":{" +
"\"sys_service_provider_id\":\"2088511833207846\"," +
"\"hb_fq_num\":\"3\"," +
"\"hb_fq_seller_percent\":\"100\"," +
"\"industry_reflux_info\":\"{\\\\\\\"scene_code\\\\\\\":\\\\\\\"metro_tradeorder\\\\\\\",\\\\\\\"channel\\\\\\\":\\\\\\\"xxxx\\\\\\\",\\\\\\\"scene_data\\\\\\\":{\\\\\\\"asset_name\\\\\\\":\\\\\\\"ALIPAY\\\\\\\"}}\"," +
"\"card_type\":\"S0JP0000\"" +
"    }," +
"\"timeout_express\":\"90m\"," +
"\"royalty_info\":{" +
"\"royalty_type\":\"ROYALTY\"," +
"        \"royalty_detail_infos\":[{" +
"          \"serial_no\":1," +
"\"trans_in_type\":\"userId\"," +
"\"batch_no\":\"123\"," +
"\"out_relation_id\":\"20131124001\"," +
"\"trans_out_type\":\"userId\"," +
"\"trans_out\":\"2088101126765726\"," +
"\"trans_in\":\"2088101126708402\"," +
"\"amount\":0.1," +
"\"desc\":\"分账测试1\"," +
"\"amount_percentage\":\"100\"" +
"          }]" +
"    }," +
"\"settle_info\":{" +
"        \"settle_detail_infos\":[{" +
"          \"trans_in_type\":\"cardAliasNo\"," +
"\"trans_in\":\"A0001\"," +
"\"summary_dimension\":\"A0001\"," +
"\"settle_entity_id\":\"2088xxxxx;ST_0001\"," +
"\"settle_entity_type\":\"SecondMerchant、Store\"," +
"\"amount\":0.1" +
"          }]," +
"\"settle_period_time\":\"7d\"" +
"    }," +
"\"sub_merchant\":{" +
"\"merchant_id\":\"2088000603999128\"," +
"\"merchant_type\":\"alipay: 支付宝分配的间连商户编号, merchant: 商户端的间连商户编号\"" +
"    }," +
"\"alipay_store_id\":\"2016052600077000000015640104\"," +
"\"merchant_order_no\":\"20161008001\"," +
"\"ext_user_info\":{" +
"\"name\":\"李明\"," +
"\"mobile\":\"16587658765\"," +
"\"cert_type\":\"IDENTITY_CARD\"," +
"\"cert_no\":\"362334768769238881\"," +
"\"min_age\":\"18\"," +
"\"fix_buyer\":\"F\"," +
"\"need_check_info\":\"F\"" +
"    }," +
"\"passback_params\":\"merchantBizType%3d3C%26merchantBizNo%3d2016010101111\"," +
"\"business_params\":{" +
"\"campus_card\":\"0000306634\"," +
"\"card_type\":\"T0HK0000\"," +
"\"actual_order_time\":\"2019-05-14 09:18:55\"" +
"    }," +
"\"qr_code_timeout_express\":\"90m\"" +
"  }");
AlipayTradePrecreateResponse response = alipayClient.execute(request);
if(response.isSuccess()){
System.out.println("调用成功");
} else {
System.out.println("调用失败");
}
```

</TabItem>

<TabItem value="py">

```py
$aop = new AopClient ();
$aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
$aop->appId = 'your app_id';
$aop->rsaPrivateKey = '请填写开发者私钥去头去尾去回车，一行字符串';
$aop->alipayrsaPublicKey='请填写支付宝公钥，一行字符串';
$aop->apiVersion = '1.0';
$aop->signType = 'RSA2';
$aop->postCharset='GBK';
$aop->format='json';
$request = new AlipayTradePrecreateRequest ();
$request->setBizContent("{" .
"\"out_trade_no\":\"20150320010101001\"," .
"\"seller_id\":\"2088102146225135\"," .
"\"total_amount\":88.88," .
"\"discountable_amount\":8.88," .
"\"undiscountable_amount\":80," .
"\"buyer_logon_id\":\"15901825620\"," .
"\"subject\":\"Iphone6 16G\"," .
"      \"goods_detail\":[{" .
"        \"goods_id\":\"apple-01\"," .
"\"alipay_goods_id\":\"20010001\"," .
"\"goods_name\":\"ipad\"," .
"\"quantity\":1," .
"\"price\":2000," .
"\"goods_category\":\"34543238\"," .
"\"categories_tree\":\"124868003|126232002|126252004\"," .
"\"body\":\"特价手机\"," .
"\"show_url\":\"http://www.alipay.com/xxx.jpg\"" .
"        }]," .
"\"body\":\"Iphone6 16G\"," .
"\"product_code\":\"FACE_TO_FACE_PAYMENT\"," .
"\"operator_id\":\"yx_001\"," .
"\"store_id\":\"NJ_001\"," .
"\"disable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," .
"\"enable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," .
"\"terminal_id\":\"NJ_T_001\"," .
"\"extend_params\":{" .
"\"sys_service_provider_id\":\"2088511833207846\"," .
"\"hb_fq_num\":\"3\"," .
"\"hb_fq_seller_percent\":\"100\"," .
"\"industry_reflux_info\":\"{\\\\\\\"scene_code\\\\\\\":\\\\\\\"metro_tradeorder\\\\\\\",\\\\\\\"channel\\\\\\\":\\\\\\\"xxxx\\\\\\\",\\\\\\\"scene_data\\\\\\\":{\\\\\\\"asset_name\\\\\\\":\\\\\\\"ALIPAY\\\\\\\"}}\"," .
"\"card_type\":\"S0JP0000\"" .
"    }," .
"\"timeout_express\":\"90m\"," .
"\"royalty_info\":{" .
"\"royalty_type\":\"ROYALTY\"," .
"        \"royalty_detail_infos\":[{" .
"          \"serial_no\":1," .
"\"trans_in_type\":\"userId\"," .
"\"batch_no\":\"123\"," .
"\"out_relation_id\":\"20131124001\"," .
"\"trans_out_type\":\"userId\"," .
"\"trans_out\":\"2088101126765726\"," .
"\"trans_in\":\"2088101126708402\"," .
"\"amount\":0.1," .
"\"desc\":\"分账测试1\"," .
"\"amount_percentage\":\"100\"" .
"          }]" .
"    }," .
"\"settle_info\":{" .
"        \"settle_detail_infos\":[{" .
"          \"trans_in_type\":\"cardAliasNo\"," .
"\"trans_in\":\"A0001\"," .
"\"summary_dimension\":\"A0001\"," .
"\"settle_entity_id\":\"2088xxxxx;ST_0001\"," .
"\"settle_entity_type\":\"SecondMerchant、Store\"," .
"\"amount\":0.1" .
"          }]," .
"\"settle_period_time\":\"7d\"" .
"    }," .
"\"sub_merchant\":{" .
"\"merchant_id\":\"2088000603999128\"," .
"\"merchant_type\":\"alipay: 支付宝分配的间连商户编号, merchant: 商户端的间连商户编号\"" .
"    }," .
"\"alipay_store_id\":\"2016052600077000000015640104\"," .
"\"merchant_order_no\":\"20161008001\"," .
"\"ext_user_info\":{" .
"\"name\":\"李明\"," .
"\"mobile\":\"16587658765\"," .
"\"cert_type\":\"IDENTITY_CARD\"," .
"\"cert_no\":\"362334768769238881\"," .
"\"min_age\":\"18\"," .
"\"fix_buyer\":\"F\"," .
"\"need_check_info\":\"F\"" .
"    }," .
"\"passback_params\":\"merchantBizType%3d3C%26merchantBizNo%3d2016010101111\"," .
"\"business_params\":{" .
"\"campus_card\":\"0000306634\"," .
"\"card_type\":\"T0HK0000\"," .
"\"actual_order_time\":\"2019-05-14 09:18:55\"" .
"    }," .
"\"qr_code_timeout_express\":\"90m\"" .
"  }");
$result = $aop->execute ( $request); 

$responseNode = str_replace(".", "_", $request->getApiMethodName()) . "_response";
$resultCode = $result->$responseNode->code;
if(!empty($resultCode)&&$resultCode == 10000){
echo "成功";
} else {
echo "失败";
}
```

</TabItem>

<TabItem value="c++">

```js
IAopClient client = new DefaultAopClient("https://openapi.alipay.com/gateway.do", "app_id", "merchant_private_key", "json", "1.0", "RSA2", "alipay_public_key", "GBK", false);
AlipayTradePrecreateRequest  request= new AlipayTradePrecreateRequest() ;
request.BizContent="{" +
"\"out_trade_no\":\"20150320010101001\"," +
"\"seller_id\":\"2088102146225135\"," +
"\"total_amount\":88.88," +
"\"discountable_amount\":8.88," +
"\"undiscountable_amount\":80," +
"\"buyer_logon_id\":\"15901825620\"," +
"\"subject\":\"Iphone6 16G\"," +
"      \"goods_detail\":[{" +
"        \"goods_id\":\"apple-01\"," +
"\"alipay_goods_id\":\"20010001\"," +
"\"goods_name\":\"ipad\"," +
"\"quantity\":1," +
"\"price\":2000," +
"\"goods_category\":\"34543238\"," +
"\"categories_tree\":\"124868003|126232002|126252004\"," +
"\"body\":\"特价手机\"," +
"\"show_url\":\"http://www.alipay.com/xxx.jpg\"" +
"        }]," +
"\"body\":\"Iphone6 16G\"," +
"\"product_code\":\"FACE_TO_FACE_PAYMENT\"," +
"\"operator_id\":\"yx_001\"," +
"\"store_id\":\"NJ_001\"," +
"\"disable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," +
"\"enable_pay_channels\":\"pcredit,moneyFund,debitCardExpress\"," +
"\"terminal_id\":\"NJ_T_001\"," +
"\"extend_params\":{" +
"\"sys_service_provider_id\":\"2088511833207846\"," +
"\"hb_fq_num\":\"3\"," +
"\"hb_fq_seller_percent\":\"100\"," +
"\"industry_reflux_info\":\"{\\\\\\\"scene_code\\\\\\\":\\\\\\\"metro_tradeorder\\\\\\\",\\\\\\\"channel\\\\\\\":\\\\\\\"xxxx\\\\\\\",\\\\\\\"scene_data\\\\\\\":{\\\\\\\"asset_name\\\\\\\":\\\\\\\"ALIPAY\\\\\\\"}}\"," +
"\"card_type\":\"S0JP0000\"" +
"    }," +
"\"timeout_express\":\"90m\"," +
"\"royalty_info\":{" +
"\"royalty_type\":\"ROYALTY\"," +
"        \"royalty_detail_infos\":[{" +
"          \"serial_no\":1," +
"\"trans_in_type\":\"userId\"," +
"\"batch_no\":\"123\"," +
"\"out_relation_id\":\"20131124001\"," +
"\"trans_out_type\":\"userId\"," +
"\"trans_out\":\"2088101126765726\"," +
"\"trans_in\":\"2088101126708402\"," +
"\"amount\":0.1," +
"\"desc\":\"分账测试1\"," +
"\"amount_percentage\":\"100\"" +
"          }]" +
"    }," +
"\"settle_info\":{" +
"        \"settle_detail_infos\":[{" +
"          \"trans_in_type\":\"cardAliasNo\"," +
"\"trans_in\":\"A0001\"," +
"\"summary_dimension\":\"A0001\"," +
"\"settle_entity_id\":\"2088xxxxx;ST_0001\"," +
"\"settle_entity_type\":\"SecondMerchant、Store\"," +
"\"amount\":0.1" +
"          }]," +
"\"settle_period_time\":\"7d\"" +
"    }," +
"\"sub_merchant\":{" +
"\"merchant_id\":\"2088000603999128\"," +
"\"merchant_type\":\"alipay: 支付宝分配的间连商户编号, merchant: 商户端的间连商户编号\"" +
"    }," +
"\"alipay_store_id\":\"2016052600077000000015640104\"," +
"\"merchant_order_no\":\"20161008001\"," +
"\"ext_user_info\":{" +
"\"name\":\"李明\"," +
"\"mobile\":\"16587658765\"," +
"\"cert_type\":\"IDENTITY_CARD\"," +
"\"cert_no\":\"362334768769238881\"," +
"\"min_age\":\"18\"," +
"\"fix_buyer\":\"F\"," +
"\"need_check_info\":\"F\"" +
"    }," +
"\"passback_params\":\"merchantBizType%3d3C%26merchantBizNo%3d2016010101111\"," +
"\"business_params\":{" +
"\"campus_card\":\"0000306634\"," +
"\"card_type\":\"T0HK0000\"," +
"\"actual_order_time\":\"2019-05-14 09:18:55\"" +
"    }," +
"\"qr_code_timeout_express\":\"90m\"" +
"  }";
AlipayTradePrecreateResponse response=client.execute(request);
Console.WriteLine(response.Body);
```

</TabItem>


</Tabs>

 ## 响应示例

<Tabs defaultValue='json'
  values={[
    {label: 'json', value: 'json'},
    {label: 'xml', value: 'xml'},
  ]}
>
<TabItem value='json'>

```json
{
    "alipay_trade_precreate_response": {
        "code": "10000",
        "msg": "Success",
        "out_trade_no": "6823789339978248",
        "qr_code": "https://qr.alipay.com/bavh4wjlxf12tper3a"
    },
    "sign": "ERITJKEIJKJHKKKKKKKHJEREEEEEEEEEEE"
}
```

</TabItem>

<TabItem value='xml'>

```xml
<alipay_trade_precreate_response>
<code>10000</code>
<msg>Success</msg>  <out_trade_no>6823789339978248</out_trade_no>
  <qr_code>https://qr.alipay.com/bavh4wjlxf12tper3a</qr_code>
</alipay_trade_precreate_response>
```

</TabItem>
</Tabs>
