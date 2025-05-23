import { MatlabHandler } from '../index';
import { jest, describe, test, expect, afterEach } from '@jest/globals';

// Assuming MatlabConfig is exported from index.ts or defined/imported elsewhere.
// For the purpose of this test, let's assume MatlabConfig is an exported interface.
interface MatlabConfig {
  executablePath: string;
  tempDir: string;
  llmApiKey?: string;
}

describe('MatlabHandler - generateCode', () => {
  let matlabHandler: MatlabHandler;
  let callLlmApiSpy: jest.SpyInstance<Promise<string>, [string]>;

  afterEach(() => {
    if (callLlmApiSpy) {
      callLlmApiSpy.mockRestore();
    }
  });

  test('should successfully generate code when LLM API key is provided', async () => {
    const configWithApiKey: MatlabConfig = {
      executablePath: 'matlab_path_mock',
      tempDir: '/tmp_mock',
      llmApiKey: 'test-api-key',
    };
    matlabHandler = new MatlabHandler(configWithApiKey);

    // @ts-ignore 
    callLlmApiSpy = jest.spyOn(matlabHandler, 'callLlmApi');
    
    const mockMatlabCode = "% Mock MATLAB code from LLM";
    callLlmApiSpy.mockResolvedValue(mockMatlabCode);

    const description = "generate a plot";
    const result = await matlabHandler.generateCode(description);

    expect(callLlmApiSpy).toHaveBeenCalledWith(description);
    expect(result).toBe(mockMatlabCode);
  });

  test('should throw an error if LLM API key is missing', async () => {
    const configWithoutApiKey: MatlabConfig = {
      executablePath: 'matlab_path_mock',
      tempDir: '/tmp_mock',
    };
    matlabHandler = new MatlabHandler(configWithoutApiKey);
    
    // @ts-ignore
    callLlmApiSpy = jest.spyOn(matlabHandler, 'callLlmApi');
    // The original callLlmApi will be called and is expected to throw.
    // No need to mock its implementation for this test case.

    const description = "generate a matrix operation";
    
    await expect(matlabHandler.generateCode(description))
      .rejects
      .toThrow("LLM API key is not configured. Please set the LLM_API_KEY environment variable.");
    
    expect(callLlmApiSpy).toHaveBeenCalledWith(description);
  });
});
