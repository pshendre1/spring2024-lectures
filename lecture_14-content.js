addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 4}], "Previous lectures: data for pretraining => general capabilities", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 6}], "What if you want to add new capabilities to your language model?", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 9}], "- Solving tasks (e.g., information extraction)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 10}], "- Instruction following and chat", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 12}], "- Long contexts (e.g., 4096 -> 100,000)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 13}], "- Infilling (e.g., the cat __ the hat)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 15}], "- Domain-specific capabilities (e.g., coding, math, medicine)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 17}], "- Safety (e.g., refusal)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 18}], "- Reasoning (e.g., chain of thought)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 21}], "This lecture: fine-tune on *data* that exhibits the desired capabilities", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 23}], "Sources of data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 24}], "- Annotators (e.g., Llama 2 instruction data)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 25}], "- Real users (e.g., ShareGPT)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 26}], "- Curated (e.g., from Common Crawl)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 27}], "- Distilled from stronger model (e.g., synthetic data from GPT-4)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 28}], "- Self-distillation (synthetic data from model you're training)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 63}], "The textbook version:", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 64}], "1. Pre-training: train on raw text (e.g., documents from the web)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 65}], "2. Mid-training (continued pre-training): enhance capabilities", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 66}], "3. Post-training: fine-tune on a particular task/dataset", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 68}], "Reality: lines are blurry", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 69}], "- Often there are multiple stages of training", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 70}], "- Train on general data, then train on clean data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 71}], "- Mix in instruction data towards the end of training", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 73}], "Example (Dolma): (1) 2T tokens of Dolma 1.7, (2) 50B tokens on {Wikipedia, OpenWebMath, Flan}", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 74}], "https://blog.allenai.org/olmo-1-7-7b-a-24-point-improvement-on-mmlu-92b43f7d269d", {"color": "gray"})
addImage([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 75}], "https://miro.medium.com/v2/resize:fit:828/format:webp/1*QFZ9R3xZUH8stKchJz9G7w.png", {"width": "100.0%"})
addImage([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 76}], "https://miro.medium.com/v2/resize:fit:828/format:webp/1*B_GIIKvnDKPFXEVb8Qd7Sw.png", {"width": "100.0%"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 30}, {"name": "training_stages", "filename": "lecture_14.py", "lineno": 78}], "Note: base model doesn't mean just trained on web documents", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 82}], "TL;DR: convert lots of existing NLP datasets into prompts", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 84}], "Super-Natural Instructions [Wang+ 2022]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 84}], "https://arxiv.org/pdf/2204.07705", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 85}], "https://huggingface.co/datasets/Muennighoff/natural-instructions", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 86}], "Dataset: 1.6K+ tasks (Figure 2)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 87}], "Fine-tune T5 on k-shot learning (Tk-instruct)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 88}], "Tasks contributed by community (via GitHub)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 89}], "Examples for each task are derived from existing datasets and converted into templatized prompts", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 90}], "Outperforms InstructGPT despite being much smaller(?)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 92}], "Flan 2022 [Longpre+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 92}], "https://arxiv.org/pdf/2301.13688", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 93}], "Dataset: 1.8K+ tasks", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 94}], "https://huggingface.co/datasets/Muennighoff/flan", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 32}, {"name": "tasks", "filename": "lecture_14.py", "lineno": 95}], "Fine-tune T5 on zero-shot, few-shot, chain-of-thought versions of the dataset (Figure 7)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 99}], "TL;DR: more open-ended instructions, heavy use of synthetic data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 101}], "Alpaca [Taori+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 101}], "https://crfm.stanford.edu/2023/03/13/alpaca.html", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 102}], "Dataset of 52K examples from text-davinci-003 using self-instruct [Wang+ 2022]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 102}], "https://arxiv.org/pdf/2212.10560", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 103}], "Fine-tune LLaMA 7B on this dataset", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 105}], "Vicuna [LMSYS 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 105}], "https://lmsys.org/blog/2023-03-30-vicuna/", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 106}], "Fine-tuned LLaMA on 70K conversations from ShareGPT (user-shared ChatGPT)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 106}], "https://sharegpt.com/", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 108}], "Baize [Xu+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 108}], "https://arxiv.org/pdf/2304.01196", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 109}], "Generate dataset (111.5K examples) from GPT-3.5 using self-chat (seeded with Quora and StackOverflow questions)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 110}], "Fine-tune LLaMA on this dataset", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 112}], "WizardLM [Xu+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 112}], "https://arxiv.org/pdf/2304.12244", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 113}], "Evol-Instruct dataset ('evolve' questions to increase breadth/difficulty) (Figure 1)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 114}], "Fine-tune LLaMA on this dataset", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 116}], "UltraLLaMA [Ding+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 116}], "https://arxiv.org/pdf/2305.14233", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 117}], "UltraChat: 1.5M multi-turn dialogues across wide range of topics (Tables 2+3)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 117}], "https://huggingface.co/datasets/stingning/ultrachat", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 118}], "Fine-tune LLaMA on UltraChat", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 120}], "MAmmoTH2 [Yue 2024]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 120}], "https://arxiv.org/pdf/2405.03548", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 121}], "Curated WebInstruct, 10M instructions from Common Crawl", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 122}], "Filter: train fastText classifier on quiz sites and filtering", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 123}], "Extract: use GPT-4 and Mixtral to extract QA pairs", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 124}], "Fine-tune Mistral 7B on this data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 125}], "Boosts math performance", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 127}], "OpenHermes 2.5", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 128}], "Agglomeration of many datasets", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 128}], "https://huggingface.co/datasets/teknium/openhermes", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 129}], "Fine-tune Mistral 7B on 1M examples from GPT-4", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 129}], "https://huggingface.co/teknium/OpenHermes-2.5-Mistral-7B", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 131}], "Llama 2 chat [Touvron+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 131}], "https://arxiv.org/pdf/2307.09288", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 132}], "27,540 examples of high-quality instruction data from vendor-based annotations", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 133}], "Said was better than using the millions of examples from open datasets", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 33}, {"name": "instruction_chat", "filename": "lecture_14.py", "lineno": 134}], "Could have labeled less data and saved more effort for getting RLHF data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 138}], "LLama 2 is trained on sequences of 4096 tokens", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 140}], "Demand for long contexts (want to do QA on books)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 141}], "- Claude 2.1 has 100K tokens", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 142}], "- Gemini 1.5 has 1M tokens", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 144}], "Transformers scales quadratically with sequence length", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 145}], "Not efficient to pre-train on long contexts, want to add long context later", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 147}], "LongLoRA [2024]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 147}], "https://arxiv.org/pdf/2309.12307", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 148}], "Extends context length of Llama2 7B from 4K to 100K tokens", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 149}], "Use shifted sparse attention (Figure 2), positional interpolation [Chen+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 150}], "Trained on long documents - PG-19 (books) and Proof-Pile (math)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 152}], "How to train on long contexts", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 152}], "https://huggingface.co/blog/wenbopan/long-context-fine-tuning#long-text-data", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 153}], "anti-haystack", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 35}, {"name": "long_context", "filename": "lecture_14.py", "lineno": 153}], "https://huggingface.co/datasets/wenbopan/anti-haystack", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 157}], "Language models predict the next token given previous tokens", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 159}], "Infilling applications: writing assistant, code autocomplete", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 161}], "Goal: model that can only predict the next token => model that can infill", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 163}], "Enabling Language Models to Fill in the Blanks [Donahue+ 2020]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 163}], "https://arxiv.org/pdf/2005.05339", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 164}], "Data: take any text (stories, abstracts) and randomly mask out words", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 165}], "She ate [blank] for [blank] => leftover pasta [answer] lunch [answer]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 166}], "Fine-tuned GPT-2 on this data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 168}], "Efficient training of language models to fill in the middle [Bavarian+ 2022]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 36}, {"name": "infilling", "filename": "lecture_14.py", "lineno": 168}], "https://arxiv.org/pdf/2207.14255", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 173}], "Code Llama [Rozi\u00e8re+ 2023 (Meta)]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 173}], "https://arxiv.org/pdf/2308.12950", {"color": "gray"})
addImage([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 174}], "https://pbs.twimg.com/media/F4TkZeFXoAEUzoM.png", {"width": "100.0%"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 175}], "Added many capabilities (Figure 2)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 176}], "- Code and infilling (500B tokens): split into prefix-suffix-middle and suffix-prefix-middle", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 177}], "- Long context (20B tokens): 16384 tokens, changed period of RoPE embeddings", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 178}], "- Instruction following (5B tokens): proprietary dataset + self-instruct with execution feedback", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 179}], "- Rehearsal (to avoid forgetting): mix in 6% code and 2% text", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 182}], "Llemma [Azerbayev+ 2024]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 182}], "https://arxiv.org/pdf/2310.10631", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 183}], "Proof-Pile-2: AlgebraicStack, OpenWebMath, arXiv", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 183}], "https://huggingface.co/datasets/EleutherAI/proof-pile-2", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 184}], "Fine-tune Code Llama on Proof-Pile-2", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 185}], "Competes with Minerva 62B (Figure 1)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 188}], "PMC-LLaMA [Wu+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 188}], "https://arxiv.org/pdf/2304.14454", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 189}], "Dataset: 4.8M biomedical academic papers, 30K medical textbooks, instructions (Figure 2)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 190}], "Fine-tune LLaMA on this data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 38}, {"name": "domains", "filename": "lecture_14.py", "lineno": 191}], "Outperforms ChatGPT on PubMedQA, MedMCQA, USMLE", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 195}], "Distilling step by step [Hsieh+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 195}], "https://arxiv.org/pdf/2305.02301", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 196}], "Prompt strong model (PaLM 540B) to get (input, rationale, output) examples (Figure 2)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 197}], "Fine-tune weak model (T5) on [input => rationale] and [input => output]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 199}], "Orca 2 [Mitra+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 199}], "https://arxiv.org/pdf/2311.11045", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 200}], "Prompt strong model (GPT-4) to generate reasoning patterns: step-by-step processing, recall-then-generate, recall-reason-generate, extract-generate, direct-answer (Section 3)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 202}], "Fine-tune weak model (LLama) on this data with prompt erasure (of the type of reasoning)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 40}, {"name": "reasoning", "filename": "lecture_14.py", "lineno": 204}], "Limitation: these works require a stronger model as an oracle...", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 209}], "Constitutional AI [Bai+ 2022]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 209}], "https://arxiv.org/pdf/2212.08073", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 211}], "Goal: improve safety of model without human feedback for harms", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 212}], "Motivation: getting humans labels for harmful content could be extra costly (emotional toll)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 214}], "Constitution: set of principles with small number of examples", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 215}], "Example: Section 3.1", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 217}], "prompt => initial response => critique => revision => final response", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 219}], "Use constitution to ask model to critique and revise", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 220}], "Fine-tune on (prompt, final response) examples from this chain", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 223}], "Consistency tuning [Li+ 2023]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 223}], "https://arxiv.org/pdf/2310.01846", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 225}], "Motivation:", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 226}], "  User: what is 7+8? | ChatGPT: 15", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 227}], "  User: 7+8? True or false | ChatGPT: False", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 229}], "Generate model responses from generator and validator", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 230}], "Fine-tune on the data where the two are consistent", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 231}], "Improves consistency (Table 3) and accuracy (Table 5)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 234}], "STaR: self-taught reasoner [Zelikman+ 2022]", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 234}], "https://arxiv.org/pdf/2203.14465", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 236}], "Chain-of-thought improves performance (input => rationale => output)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 237}], "Getting (input, rationale, output) examples is expensive", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 239}], "Can we use (input, output) pairs?", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 241}], "Method:", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 242}], "- Generate rationale given input", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 243}], "- If lead to output, then keep (input, rationale, output)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 244}], "- Otherwise, generate rationale given (input, output) [rationalization] (helps - Figure 4)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 246}], "Fine-tune on this data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 247}], "Works as well as 30x larger model on CommonsenseQA", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 249}], "Rumors of OpenAI's Q* algorithm...", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 41}, {"name": "self_distillation", "filename": "lecture_14.py", "lineno": 249}], "https://www.theatlantic.com/technology/archive/2023/11/openai-sam-altman-q-algorithm-breakthrough-project/676163/", {"color": "gray"})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 43}], "Discussion on types of data", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 44}], "- Extract useful signals from the web", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 45}], "- Distillation from stronger model (GPT-4): cheap, scientifically interesting (oracle); be careful of licenses, playing catch up, not pushing things forward", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 47}], "- Self-distillation (constitutional AI, STaR): synthetic data, promising way to squeeze more out", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 49}], "## Summary", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 50}], "Add general capabilities just by adding data - very flexible!", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 51}], "Not a substitute for a strong base model (for generalization)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 52}], "But for specific tasks, can get much smaller models to perform well", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 54}], "Data is the key ingredient that differentiates language models", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 55}], "Live service => raw data => processed data (conversion, filtering, deduplication)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 56}], "Legal and ethical issues (e.g., copyright and privacy)", {})
addText([{"name": "lecture_14", "filename": "lecture_14.py", "lineno": 57}], "Much of this pipeline is heuristic, many opportunities to improve", {})
