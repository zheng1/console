/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */
module.exports = {
  'Add Rule': '添加規則',
  Alerting: '告警',
  'Alerting Detail': '告警詳情',
  'Alerting History': '告警歷史',
  'Alerting Message': '告警訊息',
  'Alerting Messages': '告警訊息',
  'Alerting Monitoring': '告警監控',
  'Alerting Policies': '告警策略',
  'alerting policy': '告警策略',
  'Alerting Policy': '告警策略',
  'Alerting Resource': '告警資源',
  'alerting rule': '告警規則',
  'Alerting Rule': '告警規則',
  'Alerting Rules': '告警規則',
  'Alerting Status': '告警狀態',
  'Alerting Duration': '告警持續時間',
  'Alerting Type': '告警級別',
  Condition: '條件',
  'cpu usage': 'CPU 使用量',
  'cpu utilization rate': 'CPU 利用率',
  'disk read iops': '本地硬碟讀取 IOPS',
  'disk read throughput': '本地硬碟讀取吞吐量',
  'disk space available': '本地硬碟可用空間',
  'disk write iops': '本地硬碟寫入 IOPS',
  'disk write throughput': '本地硬碟寫入吞吐量',
  'Edit Rule': '編輯規則',
  'inode utilization rate': 'inode利用率',
  'local disk space utilization rate': '本地硬碟空間利用率',
  'memory available': '可用記憶體',
  'memory usage': '記憶體使用量',
  'memory usage (including cache)': '記憶體使用量 ( 包含快取 )',
  'memory utilisation (including cache)': '記憶體使用率 ( 包含快取 )',
  'memory utilization rate': '記憶體利用率',
  Message: '訊息',
  'Critical Alert': '危險告警',
  'Error Alert': '重要告警',
  'Warning Alert': '一般告警',
  'Monitoring Rules': '監控規則',
  'monitoring target': '監控目標',
  'Monitoring Target': '監控目標',
  'network data receiving rate': '網路接收數據速率',
  'network data transmitting rate': '網路發送數據速率',
  'Notification Channel': 'Notification Channel',
  'Notification List': 'Notification List',
  'Notification Settings': '通知設置',
  'Please add at least one rule': '請至少添加一個告警規則',
  'Please input the threshold': '請輸入臨界值',
  'pod abnormal ratio': '容器組異常率',
  'pod utilization rate': '容器組利用率',
  'Alert Active Time': '告警激活時間',
  'Recent Notification': 'Recent Notification',
  'Recovery Time': 'Recovery Time',
  Rule: '規則',
  'Rule Name': '規則名稱',
  Threshold: '臨界值',
  'Unavailable replicas ratio': '副本不可用率',
  'Unavailable daemonset replicas ratio': '守護進程集副本不可用率',
  'Unavailable deployment replicas ratio': '部署副本不可用率',
  'Unavailable statefulset replicas ratio': '有狀態集副本不可用率',
  'View Details': '查看詳情',
  'Rule Templates': '規則模版',
  'Custom Rule': '自定義規則',
  'Rule Expression': '告警規則表達式',
  'Invalid time': '時間格式錯誤',
  'Please input the rule expression': '请输入告警規則表達式',
  'Notification Content': '通知内容',
  'Custom Policies': '自定義策略',
  'Built-In Policies': '内置策略',
  load1: 'CPU 1分鐘平均負載',
  load5: 'CPU 5分鐘平均負載',
  load15: 'CPU 15分鐘平均負載',
  ALERT_TYPE: ' {type} 告警',
  ALERT_POLICY_DESC: '設置告警規則',
  ALERT_MESSAGE_DESC: '告警訊息紀錄了在工作負載級别的告警策略中，所有已發出的滿足告警規則的告警訊息。',
  ALERTING_POLICY_CREATE_DESC: '您可以通過設置告警規則，即時發現資源的異常情況',
  RESOURCE_NODE_FORM_TIP: '請選擇集群節點',
  RESOURCE_WORKLOAD_FORM_TIP: '請選擇工作負載',
  REQUESTS_FOR_TRIGGER_AN_ALARM_Q: '觸發告警訊息的前提條件？',
  REQUESTS_FOR_TRIGGER_AN_ALARM_A: '需要對資源設置告警策略，當資源某項指標達到了告警策略的臨界值後即會觸發並推送訊息。',
  REQUESTS_FOR_PUSH_AN_ALARM_Q: '告警策略訊息推送的前提條件？',
  REQUESTS_FOR_PUSH_AN_ALARM_A: '平台管理員需要選擇告警通知的方式並配置對應的伺服器。',
  HOW_TO_SUPRESS_AN_ALARM_Q: '如何對告警訊息進行抑制？',
  HOW_TO_SUPRESS_AN_ALARM_A: '可以對每條告警策略進行多級别的設置，每個級别對應不同的告警週期及重覆週期',
  ALERTING_DURATION: '監控目標满足告警條件的時間達到告警持續時間後，將觸發告警',
  ALERT_RULE_INACTIVE: '未觸發',
  ALERT_RULE_PENDING: '待觸發',
  ALERT_RULE_FIRING: '觸發中',
  ALERT_RULE_HEALTH_OK: '健康',
  ALERT_RULE_HEALTH_ERR: '錯誤',
  ALERT_RULE_HEALTH_UNKNOWN: '未知',
  ALERT_RULE_EXPRESSION_DESC: '告警規則可以通過 PromQL 語句來自定義，PromQL 相關語法請參考 <a href="https://prometheus.io/docs/prometheus/latest/querying/basics/" target="_blank" rel="noreferrer noopener">Prometheus Querying</a>'
};