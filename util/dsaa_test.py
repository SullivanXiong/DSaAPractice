import argparse
import os

DS = "data-structures"
ALG = "algorithms"

LANGUAGES = {
    "py": "python",
    "js": "javascript",
    "java": "java"
}

class TestDSAA:
    def __init__(self, args, existing_modules):
        self.args = args
        self.existing_modules = existing_modules

    def run(self):
        if self.args.type == "all":
            self.test_all()
        elif self.args.type == "module":
            _dir = self.args.module.split("/")
            
            if len(_dir) != 3:
                print("Invalid module: '{self.args.module}'. Use format: 'data-structures/ds2-linked-list/linked-list'")
                return
            
            dsaa = _dir[0]
            module = _dir[1]
            project = _dir[2]
            
            if dsaa not in self.existing_modules:
                print("Invalid dsaa")
                return
            
            if module not in self.existing_modules[dsaa]:
                print("Invalid module")
                return
            
            if project not in self.existing_modules[dsaa][module]:
                print("Invalid project")
                return
            
            self.test_module(dsaa, module, project)
        else:
            print("Invalid test type")

    def test_all(self):
        print(f"Testing all modules for {self.args.username}")

    def test_module(self, dsaa, module, project):
        if self.args.language not in LANGUAGES:
            print(f"Invalid language: {self.args.language}")
            return
        
        language = LANGUAGES[self.args.language]
        
        print(f"Testing {dsaa}/{module}/{project} for {self.args.username} in {language}")
        
        project_path = f"{dsaa}/{module}/{project}/{self.args.username}-{language}"
        if not os.path.exists(project_path):
            print(f"Project does not exist: {project_path}")
            return
        
        match language:
            case "python":
                python_command = f'pytest -v ./{project_path}/{dash_to_snake(project)}_test.py'
                os.system(python_command)
            case "javascript":
                js_tests = os.listdir(f"{DS}/{module}/{project}/java")
                js_or_ts = "ts" if js_tests[0].endswith("ts") else "js"
                javascript_command = f'jest ./{project_path}/{dash_to_camel(project)}Test.{js_or_ts}'
                os.system(javascript_command)
            case "java":
                java_tests = os.listdir(f"{DS}/{module}/{project}/java")
                java_tests = [f'./{project_path}/{test}' for test in java_tests if test.endswith("Test.java")]
                
                java_file = f'./{project_path}/{dash_to_pascal(project)}.java'
                java_tests = " ".join(java_tests)
                
                java_optional = ""
                if project == "calcudoku":
                    java_optional = ' -DtestDir="data-structures/ds1-array/calcudoku/test"'
                
                java_compile_command = f'javac -cp ".;util/junit-platform-console-standalone-1.9.3.jar;util/junit-jupiter-params-5.11.3.jar" {java_file} {java_tests}'
                java_command = f'java{java_optional} -jar util/junit-platform-console-standalone-1.9.3.jar --class-path ./{project_path}/ --scan-classpath'

                os.system(java_compile_command)
                os.system(java_command)
            case _:
                print("Invalid language")

def get_existing_modules():
    existing_modules = {}
    
    ds_modules = {}
    for module in os.listdir(DS):
        ds_project = os.listdir(f"{DS}/{module}")
        ds_modules[module] = ds_project
        
    algorithm_modules = {}
    for module in os.listdir(ALG):
        algorithm_project = os.listdir(f"{ALG}/{module}")
        algorithm_modules[module] = algorithm_project
            
    existing_modules[DS] = ds_modules
    existing_modules[ALG] = algorithm_modules
    
    return existing_modules

def dash_to_pascal(text):
    words = text.split("-")
    words = [word.capitalize() for word in words]
    return "".join(words)

def dash_to_camel(text):
    words = text.split("-")
    words = [words[0]] + [word.capitalize() for word in words[1:]]
    return "".join(words)

def dash_to_snake(text):
    words = text.split("-")
    return "_".join(words)
    
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Test DSAA module")
    parser.add_argument("--type", required=True, help="Type of test to run. <all, module>")
    parser.add_argument("--username", required=True, help="Username for testing. <suxiong>")
    parser.add_argument("--module", help="Module to test. <data-structures/ds2-linked-list/linked-list>")
    parser.add_argument("--language", help="Language of module. <py, js, java>")
    args = parser.parse_args()
    
    # get the existing modules by using os.walk through the data-structures and algorithms folder and getting each module
    existing_modules = get_existing_modules()
    
    test = TestDSAA(args, existing_modules)
    test.run()