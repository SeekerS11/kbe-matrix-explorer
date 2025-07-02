import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, AlertCircle, XCircle, Star, Zap, Shield, Cpu, Globe, Code, Users, Eye, Link, DollarSign } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ComparisonMatrix = () => {
  const isMobile = useIsMobile();
  
  const platforms = [
    'Kubeark',
    'IBM Watsonx',
    'UiPath',
    'Azure AI Foundry',
    'Google Vertex AI',
    'CrewAI',
    'Automation Anywhere',
    'Workato',
    'Boomi (Dell)',
    'Zapier',
    'n8n',
    'MuleSoft'
  ];

  // Icon mapping for better visual representation
  const iconMap = {
    '✅': <CheckCircle className="w-4 h-4 text-green-600" />,
    '⚠️': <AlertCircle className="w-4 h-4 text-yellow-600" />,
    '❌': <XCircle className="w-4 h-4 text-red-600" />,
    '': <DollarSign className="w-4 h-4 text-gray-400" />
  };

  // Function to get UTM parameters from current URL
  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();
    
    // Common UTM parameters to preserve
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        utmParams.set(key, value);
      }
    });
    
    return utmParams.toString();
  };

  // Function to handle demo button click with UTM parameters
  const handleDemoClick = () => {
    const utmParams = getUTMParams();
    const calendlyUrl = `https://calendly.com/dragos-nanuti/kubeark${utmParams ? `?${utmParams}` : ''}`;
    window.open(calendlyUrl, '_blank');
  };

  const features = [
    {
      name: 'Agentic Automation Engine',
      icon: <Cpu className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Proprietary agent engine with memory, hybrid reasoning (LLM + rules), and audit' },
        'IBM Watsonx': { icon: '✅', text: 'Prebuilt agents with orchestration' },
        'UiPath': { icon: '✅', text: 'Maestro orchestrator with agents and automation' },
        'Azure AI Foundry': { icon: '✅', text: 'Modular microservices for agent-like execution' },
        'Google Vertex AI': { icon: '✅', text: 'ADK + agent frameworks' },
        'CrewAI': { icon: '✅', text: 'Crew-based LLM orchestration' },
        'Automation Anywhere': { icon: '✅', text: 'AI bots with agentic features' },
        'Workato': { icon: '⚠️', text: 'Recipe-based automation only' },
        'Boomi (Dell)': { icon: '⚠️', text: 'Integration logic but not true agentic AI' },
        'Zapier': { icon: '❌', text: 'No agentic support' },
        'n8n': { icon: '❌', text: 'No agentic support' },
        'MuleSoft': { icon: '❌', text: 'No agentic automation, integration-only' }
      }
    },
    {
      name: 'Workflow Execution Modes',
      icon: <Zap className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Parallel, queue, terminate, scheduled, retry, fallback' },
        'IBM Watsonx': { icon: '⚠️', text: 'Limited' },
        'UiPath': { icon: '✅', text: 'Full suite with human/AI/bot flows' },
        'Azure AI Foundry': { icon: '✅', text: 'Multi-agent workflows' },
        'Google Vertex AI': { icon: '✅', text: 'Agent Garden' },
        'CrewAI': { icon: '⚠️', text: 'Limited' },
        'Automation Anywhere': { icon: '⚠️', text: 'Basic' },
        'Workato': { icon: '✅', text: 'Triggered and chained recipes' },
        'Boomi (Dell)': { icon: '✅', text: 'Scheduled and batch execution' },
        'Zapier': { icon: '⚠️', text: 'Sequential flows only' },
        'n8n': { icon: '✅', text: 'Advanced flow builder' },
        'MuleSoft': { icon: '✅', text: 'Async + sequential flows supported' }
      }
    },
    {
      name: 'Cognitive AI Agents & Goal Seeking',
      icon: <Star className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Agents with multi-turn memory, goal seeking, planning, auditability' },
        'IBM Watsonx': { icon: '✅', text: 'Conversational agents' },
        'UiPath': { icon: '✅', text: 'Sensing, planning, acting' },
        'Azure AI Foundry': { icon: '✅', text: 'Autogen, semantic kernel' },
        'Google Vertex AI': { icon: '✅', text: 'ADK agent tooling' },
        'CrewAI': { icon: '✅', text: 'Goal-driven LLM agents' },
        'Automation Anywhere': { icon: '⚠️', text: 'Scripted bots, some intelligence' },
        'Workato': { icon: '❌', text: 'No cognitive capabilities' },
        'Boomi (Dell)': { icon: '❌', text: 'No cognitive capabilities' },
        'Zapier': { icon: '❌', text: 'No cognitive capabilities' },
        'n8n': { icon: '❌', text: 'No cognitive capabilities' },
        'MuleSoft': { icon: '❌', text: 'No cognitive capabilities' }
      }
    },
    {
      name: 'Integration Connectivity',
      icon: <Link className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: '1400+ connectors, 11 languages, UI + API automation' },
        'IBM Watsonx': { icon: '✅', text: '80+ integrations' },
        'UiPath': { icon: '✅', text: '100+ connectors, LangChain' },
        'Azure AI Foundry': { icon: '✅', text: '1400+ Logic Apps' },
        'Google Vertex AI': { icon: '✅', text: 'Connectors for Workspace, ServiceNow' },
        'CrewAI': { icon: '⚠️', text: 'API-level only' },
        'Automation Anywhere': { icon: '✅', text: 'RPA + APIs' },
        'Workato': { icon: '✅', text: '1000+ connectors, SDK' },
        'Boomi (Dell)': { icon: '✅', text: '1500+ connectors' },
        'Zapier': { icon: '✅', text: '6000+ app integrations' },
        'n8n': { icon: '✅', text: 'Extendable node-based connectors' },
        'MuleSoft': { icon: '✅', text: 'Deep APIs, SDKs, legacy apps' }
      }
    },
    {
      name: 'UI Automation Support',
      icon: <Globe className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Unified UI + API automation' },
        'IBM Watsonx': { icon: '❌', text: 'No UI automation' },
        'UiPath': { icon: '✅', text: 'Computer vision and UI automation' },
        'Azure AI Foundry': { icon: '❌', text: 'No UI automation' },
        'Google Vertex AI': { icon: '❌', text: 'No UI automation' },
        'CrewAI': { icon: '❌', text: 'No UI automation' },
        'Automation Anywhere': { icon: '✅', text: 'RPA-based UI support' },
        'Workato': { icon: '⚠️', text: 'Browser plugin only' },
        'Boomi (Dell)': { icon: '⚠️', text: 'Custom agent only' },
        'Zapier': { icon: '❌', text: 'No UI automation' },
        'n8n': { icon: '❌', text: 'No UI automation' },
        'MuleSoft': { icon: '❌', text: 'No UI automation' }
      }
    },
    {
      name: 'On-Prem & Airgapped Deployment',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Full support (VMs, K8s, sovereign cloud, defense)' },
        'IBM Watsonx': { icon: '✅', text: 'Cloud Pak on-prem' },
        'UiPath': { icon: '✅', text: 'On-prem Automation Suite' },
        'Azure AI Foundry': { icon: '❌', text: 'Cloud only' },
        'Google Vertex AI': { icon: '❌', text: 'Cloud only' },
        'CrewAI': { icon: '✅', text: 'Open-source, can be hosted' },
        'Automation Anywhere': { icon: '✅', text: 'On-prem support' },
        'Workato': { icon: '✅', text: 'Hybrid agents possible' },
        'Boomi (Dell)': { icon: '✅', text: 'On-prem runtime' },
        'Zapier': { icon: '❌', text: 'Cloud only' },
        'n8n': { icon: '⚠️', text: 'Self-hosted available' },
        'MuleSoft': { icon: '✅', text: 'Runtime Fabric' }
      }
    },
    {
      name: 'Smart Triggers',
      icon: <Zap className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'File, cron, API, DB, queue' },
        'IBM Watsonx': { icon: '⚠️', text: 'Limited trigger catalog' },
        'UiPath': { icon: '✅', text: 'Events & queues' },
        'Azure AI Foundry': { icon: '✅', text: 'Events grid' },
        'Google Vertex AI': { icon: '✅', text: 'Event-based' },
        'CrewAI': { icon: '⚠️', text: 'Basic triggers' },
        'Automation Anywhere': { icon: '✅', text: 'Scheduler + API trigger' },
        'Workato': { icon: '✅', text: 'App triggers, webhook, schedule' },
        'Boomi (Dell)': { icon: '✅', text: 'Event-driven' },
        'Zapier': { icon: '✅', text: 'App/webhook/cron' },
        'n8n': { icon: '✅', text: 'Any node or trigger' },
        'MuleSoft': { icon: '✅', text: 'Event + API' }
      }
    },
    {
      name: 'Serverless Function Execution',
      icon: <Code className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Inline Python/Node execution' },
        'IBM Watsonx': { icon: '⚠️', text: 'Limited scripting' },
        'UiPath': { icon: '✅', text: 'Code in flows' },
        'Azure AI Foundry': { icon: '⚠️', text: 'Via SDK only' },
        'Google Vertex AI': { icon: '✅', text: 'Code steps' },
        'CrewAI': { icon: '❌', text: 'No serverless functions' },
        'Automation Anywhere': { icon: '⚠️', text: 'Limited scripting' },
        'Workato': { icon: '⚠️', text: 'Scripting step' },
        'Boomi (Dell)': { icon: '❌', text: 'No serverless functions' },
        'Zapier': { icon: '❌', text: 'No serverless functions' },
        'n8n': { icon: '⚠️', text: 'JavaScript only' },
        'MuleSoft': { icon: '⚠️', text: 'Via code connectors' }
      }
    },
    {
      name: 'Human-in-the-loop Validation Center',
      icon: <Users className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Native validation with conflict resolution' },
        'IBM Watsonx': { icon: '⚠️', text: 'Governance tools' },
        'UiPath': { icon: '✅', text: 'Human-in-loop workflows' },
        'Azure AI Foundry': { icon: '⚠️', text: 'Dev tools' },
        'Google Vertex AI': { icon: '⚠️', text: 'Agentspace only' },
        'CrewAI': { icon: '⚠️', text: 'Manual feedback' },
        'Automation Anywhere': { icon: '✅', text: 'Co-pilots and human flows' },
        'Workato': { icon: '❌', text: 'No HIL support' },
        'Boomi (Dell)': { icon: '❌', text: 'No HIL support' },
        'Zapier': { icon: '❌', text: 'No HIL support' },
        'n8n': { icon: '❌', text: 'No HIL support' },
        'MuleSoft': { icon: '❌', text: 'No HIL support' }
      }
    },
    {
      name: 'Low-Code / No-Code Agent Builder',
      icon: <Code className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Agent Kanvas studio' },
        'IBM Watsonx': { icon: '✅', text: 'Visual builder' },
        'UiPath': { icon: '✅', text: 'StudioX' },
        'Azure AI Foundry': { icon: '⚠️', text: 'Dev-first SDK' },
        'Google Vertex AI': { icon: '✅', text: 'No-code agent UI' },
        'CrewAI': { icon: '✅', text: 'Visual + Python SDK' },
        'Automation Anywhere': { icon: '✅', text: 'Drag-drop studio' },
        'Workato': { icon: '✅', text: 'Visual flow builders' },
        'Boomi (Dell)': { icon: '✅', text: 'Studio interfaces' },
        'Zapier': { icon: '✅', text: 'Visual flow builders' },
        'n8n': { icon: '✅', text: 'Node-based visual builder' },
        'MuleSoft': { icon: '✅', text: 'Studio interfaces' }
      }
    },
    {
      name: 'Observability & Monitoring',
      icon: <Eye className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'Live telemetry, logs, tracing' },
        'IBM Watsonx': { icon: '✅', text: 'Runtime dashboards' },
        'UiPath': { icon: '✅', text: 'Observability tools' },
        'Azure AI Foundry': { icon: '✅', text: 'Azure Monitor' },
        'Google Vertex AI': { icon: '✅', text: 'Observability tools' },
        'CrewAI': { icon: '✅', text: 'Logs UI' },
        'Automation Anywhere': { icon: '✅', text: 'Logs + discovery' },
        'Workato': { icon: '⚠️', text: 'Job monitoring' },
        'Boomi (Dell)': { icon: '⚠️', text: 'Atom logs' },
        'Zapier': { icon: '⚠️', text: 'Minimal' },
        'n8n': { icon: '⚠️', text: 'CLI/UI logs' },
        'MuleSoft': { icon: '✅', text: 'Monitoring suite' }
      }
    },
    {
      name: 'Cross-Platform Interoperability',
      icon: <Link className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'LangChain, OpenAPI, composable agent mesh' },
        'IBM Watsonx': { icon: '⚠️', text: 'Partial' },
        'UiPath': { icon: '✅', text: 'Google + LangChain' },
        'Azure AI Foundry': { icon: '✅', text: 'A2A API' },
        'Google Vertex AI': { icon: '✅', text: 'Model Garden interop' },
        'CrewAI': { icon: '⚠️', text: 'Minimal' },
        'Automation Anywhere': { icon: '⚠️', text: 'RPA focus' },
        'Workato': { icon: '✅', text: 'Multi-agent chaining' },
        'Boomi (Dell)': { icon: '✅', text: 'API sync & pub-sub' },
        'Zapier': { icon: '⚠️', text: 'Proprietary' },
        'n8n': { icon: '✅', text: 'Fully open' },
        'MuleSoft': { icon: '✅', text: 'REST, GraphQL, legacy adapters' }
      }
    },
    {
      name: 'Security & Compliance',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '✅', text: 'ISO 27001, SOC2, GDPR, sovereign support' },
        'IBM Watsonx': { icon: '✅', text: 'FedRAMP, ISO' },
        'UiPath': { icon: '✅', text: 'Full compliance stack' },
        'Azure AI Foundry': { icon: '✅', text: 'Azure-native' },
        'Google Vertex AI': { icon: '✅', text: 'GCP-native' },
        'CrewAI': { icon: '⚠️', text: 'Self-managed' },
        'Automation Anywhere': { icon: '✅', text: 'Role-based, encrypted' },
        'Workato': { icon: '✅', text: 'SOC2, HIPAA, ISO' },
        'Boomi (Dell)': { icon: '✅', text: 'Full compliance stack' },
        'Zapier': { icon: '⚠️', text: 'Limited' },
        'n8n': { icon: '❌', text: 'Self-hosted risk' },
        'MuleSoft': { icon: '✅', text: 'Full enterprise' }
      }
    },
    {
      name: 'Pricing Model',
      icon: <DollarSign className="w-4 h-4 text-blue-600" />,
      data: {
        'Kubeark': { icon: '', text: 'Custom enterprise (SaaS, on-prem, airgapped)' },
        'IBM Watsonx': { icon: '', text: 'Tiered annual' },
        'UiPath': { icon: '', text: 'Tiered, per bot/user' },
        'Azure AI Foundry': { icon: '', text: 'Usage-based' },
        'Google Vertex AI': { icon: '', text: 'Per-model/runtime' },
        'CrewAI': { icon: '', text: 'Free + Pro plans' },
        'Automation Anywhere': { icon: '', text: 'Per bot/user' },
        'Workato': { icon: '', text: 'Per task/user' },
        'Boomi (Dell)': { icon: '', text: 'Tiered enterprise licenses' },
        'Zapier': { icon: '', text: 'Per task/app' },
        'n8n': { icon: '', text: 'Free + cloud plan' },
        'MuleSoft': { icon: '', text: 'Tiered enterprise licenses' }
      }
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="text-center py-8 md:py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
          Multi-Agent AI Platform Comparison Matrix
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
          Comprehensive comparison of leading enterprise automation and AI orchestration platforms
        </p>
      </div>

      {/* Responsive Table Container */}
      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className={`sticky left-0 z-30 border-r border-gray-200 font-bold text-gray-900 ${isMobile ? 'min-w-[120px] max-w-[140px]' : 'min-w-[200px] max-w-[200px]'} bg-gray-50`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Feature</span>
                    </div>
                  </TableHead>
                  <TableHead className={`sticky ${isMobile ? 'left-[120px]' : 'left-[200px]'} z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-r border-gray-200 font-bold text-center min-w-[120px] max-w-[120px]`}>
                    <div className="relative flex items-center justify-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span className="text-xs">Kubeark</span>
                    </div>
                  </TableHead>
                  {platforms.slice(1).map((platform) => (
                    <TableHead key={platform} className="bg-gray-50 font-semibold text-gray-700 text-center min-w-[120px] max-w-[120px]">
                      <span className="text-xs">{platform}</span>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, index) => (
                  <TableRow 
                    key={index} 
                    className={`transition-colors ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                    } hover:bg-gray-200`}
                  >
                    <TableCell className={`sticky left-0 z-30 border-r-2 border-gray-300 font-medium text-gray-900 ${isMobile ? 'min-w-[120px] max-w-[140px]' : 'min-w-[200px] max-w-[200px]'} ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                      <div className="flex items-center space-x-2">
                        {feature.icon}
                        <span className="text-xs leading-tight">{feature.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className={`sticky ${isMobile ? 'left-[120px]' : 'left-[200px]'} z-20 bg-blue-50 border-l-2 border-blue-500 border-r border-gray-200 min-w-[120px] max-w-[120px]`}>
                      <div className="flex flex-col items-center space-y-1 p-1">
                        <div className="flex justify-center">
                          {iconMap[feature.data['Kubeark'].icon]}
                        </div>
                        <span className="text-xs text-gray-700 font-medium text-center leading-tight">{feature.data['Kubeark'].text}</span>
                      </div>
                    </TableCell>
                    {platforms.slice(1).map((platform, platformIndex) => (
                      <TableCell key={platform} className={`min-w-[120px] max-w-[120px] border-r border-gray-200 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                      }`}>
                        <div className="flex flex-col items-center space-y-1 p-1">
                          <div className="flex justify-center">
                            {iconMap[feature.data[platform].icon]}
                          </div>
                          <span className="text-xs text-gray-600 text-center leading-tight">{feature.data[platform].text}</span>
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 p-6 border-t">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-semibold text-gray-900 mb-4">Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">Full Support - Complete feature implementation</span>
            </div>
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <span className="text-sm text-gray-700">Partial Support - Limited or basic implementation</span>
            </div>
            <div className="flex items-center space-x-3">
              <XCircle className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700">No Support - Feature not available</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience Kubeark's Advanced Automation?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            See how our cognitive agents and comprehensive platform can transform your enterprise automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDemoClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request Demo
            </button>
            <a 
              href="https://docs.kubeark.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-center"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonMatrix;
