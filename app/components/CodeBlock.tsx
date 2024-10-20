"use client";

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs, dracula, xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLocalStorage } from '../contexts/LocalStorageContext';
import { CheckCircleIcon, ClipboardIcon } from '@heroicons/react/24/outline';

interface CodeBlockProps {
    code: string;
    language: string;
    showLineNumbers?: boolean
    allowCopy?: boolean
    className?: string
}
/**
 * 
 * @param code - Initial code 
 * @param language - Highlights syntax based on the language (see component for the list of available languages)
 * @param showLineNumbers - Display code line numbers (default to true)
 * 
 * @example
 * <CodeBlock code={"console.log('abc')"} language={"javascript"} />
 */
export default function CodeBlock({ code, language, showLineNumbers = true, allowCopy = true, className }: CodeBlockProps) {
    const { getItem } = useLocalStorage();
    const theme = getItem('codeTheme') as 'vscode-dark' | 'vscode-light' | 'dracula' | 'monokai';
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    function getThemeExtension() {
        switch (theme) {
            case 'vscode-dark':
                return vscDarkPlus;
            case 'vscode-light':
                return vs;
            case 'dracula':
                return dracula;
            case 'monokai':
                return xonokai;
            default:
                return vscDarkPlus;
        }
    }

    return (
        // dark:bg-slate-700 rounded-lg p-3
        <div className={`w-full overflow-x-auto ${allowCopy && `relative`} ${className}`}>
            <SyntaxHighlighter
                language={language}
                style={getThemeExtension()}
                customStyle={{
                    // background: 'transparent',
                    padding: 5,
                    margin: 0,
                    fontSize: '1rem', // Tailwind's text-base
                }}
                showLineNumbers={showLineNumbers}
                wrapLines={true}
                wrapLongLines={true}
            >
                {code}
            </SyntaxHighlighter>
            {allowCopy &&
                <button
                    onClick={handleCopy}
                    className={`absolute top-2 right-2 bg-slate-600/50 text-white p-2 rounded-md hover:bg-slate-600 transition-opacity`}
                    aria-label="Copy code to clipboard"
                >
                    {isCopied ? (
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    ) : (
                        <ClipboardIcon className="w-5 h-5" />
                    )}
                </button>
            }
        </div>
    );
}
/* LIST OF AVAILABLE LANGUAGE FOR SYNTAX HIGHLIGHTER
abap
abnf
actionscript
ada
agda
al
antlr4
apacheconf
apex
apl
applescript
aql
arduino
arff
asciidoc
asm6502
asmatmel
aspnet
autohotkey
autoit
avisynth
avroIdl (avro-idl)
bash
basic
batch
bbcode
bicep
birb
bison
bnf
brainfuck
brightscript
bro
bsl
c
cfscript
chaiscript
cil
clike
clojure
cmake
cobol
coffeescript
concurnas
coq
cpp
crystal
csharp
cshtml
csp
cssExtras (css-extras)
css
csv
cypher
d
dart
dataweave
dax
dhall
diff
django
dnsZoneFile (dns-zone-file)
docker
dot
ebnf
editorconfig
eiffel
ejs
elixir
elm
erb
erlang
etlua
excelFormula (excel-formula)
factor
falselang (false)
firestoreSecurityRules (firestore-security-rules)
flow
fortran
fsharp
ftl
gap
gcode
gdscript
gedcom
gherkin
git
glsl
gml
gn
goModule (go-module)
go
graphql
groovy
haml
handlebars
haskell
haxe
hcl
hlsl
hoon
hpkp
hsts
http
ichigojam
icon
icuMessageFormat (icu-message-format)
idris
iecst
ignore
inform7
ini
io
j
java
javadoc
javadoclike
javascript
javastacktrace
jexl
jolie
jq
jsExtras (js-extras)
jsTemplates (js-templates)
jsdoc
json
json5
jsonp
jsstacktrace
jsx
julia
keepalived
keyman
kotlin
kumir
kusto
latex
latte
less
lilypond
liquid
lisp
livescript
llvm
log
lolcode
lua
magma
makefile
markdown
markupTemplating (markup-templating)
markup
matlab
maxscript
mel
mermaid
mizar
mongodb
monkey
moonscript
n1ql
n4js
nand2tetrisHdl (nand2tetris-hdl)
naniscript
nasm
neon
nevod
nginx
nim
nix
nsis
objectivec
ocaml
opencl
openqasm
oz
parigp
parser
pascal
pascaligo
pcaxis
peoplecode
perl
phpExtras (php-extras)
php
phpdoc
plsql
powerquery
powershell
processing
prolog
promql
properties
protobuf
psl
pug
puppet
pure
purebasic
purescript
python
q
qml
qore
qsharp
r
racket
reason
regex
rego
renpy
rest
rip
roboconf
robotframework
ruby
rust
sas
sass
scala
scheme
scss
shellSession (shell-session)
smali
smalltalk
smarty
sml
solidity
solutionFile (solution-file)
soy
sparql
splunkSpl (splunk-spl)
sqf
sql
squirrel
stan
stylus
swift
systemd
t4Cs (t4-cs)
t4Templating (t4-templating)
t4Vb (t4-vb)
tap
tcl
textile
toml
tremor
tsx
tt2
turtle
twig
typescript
typoscript
unrealscript
uorazor
uri
v
vala
vbnet
velocity
verilog
vhdl
vim
visualBasic (visual-basic)
warpscript
wasm
webIdl (web-idl)
wiki
wolfram
wren
xeora
xmlDoc (xml-doc)
xojo
xquery
yaml
yang
zig
 */